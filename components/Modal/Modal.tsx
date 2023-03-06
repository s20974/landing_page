import { Dialog } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import TextField from '@mui/material/TextField';
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { uuid } from 'uuidv4';

import styles from './modal.module.scss'
import Button from "../Buttons/Button";
import { Controller, FormProvider, useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IModal {
    open: boolean,
    setOpen: any
}

const Modal: React.FC<IModal> = (props: IModal) => {
    const { handleSubmit, trigger, control, formState: { errors } } = useForm({
        defaultValues: {
            ik_customer_email: '',
        },
        resolver: yupResolver(yup.object().shape({
            ik_customer_email: yup.string().required("Email is Required").email("Email is Invalid")
        }))
    });

    const handleClose = () => {
        props.setOpen(false);
    };

    const onFromSubmit = (values: any, event: any) => {
        event.preventDefault()
        console.log(values)
    }

    console.log(process.env.NEXT_PUBLIC_CURRENCY)
    return (
        <>
            <Dialog
                className={styles.dialog}
                open={props.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth='lg'
            >
                <DialogTitle sx={{ m: 0, p: 2 }}>
                    Pleas Provide your mail

                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: '#7d9ddf',
                        }}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </IconButton>

                </DialogTitle>
                <DialogContent>
                    <div className={styles.fieldsWrapper}>
                        <form name="payment" onSubmit={handleSubmit(onFromSubmit)} id="payment" method="post" action="https://sci.interkassa.com/" accept-charset="UTF-8">
                            <input type="hidden" name="ik_co_id" value="" />
                            <input type="hidden" name="ik_pm_no" value={uuid()} />
                            <input type="hidden" name="ik_am" value={process.env.NEXT_PUBLIC_TESTS == 'true' ? "1" : process.env.NEXT_PUBLIC_PRICE} />
                            <input type="hidden" name="ik_desc" value="Join HomEazyAi today and explore the world of AI and what it can do for you!" />
                            {
                                process.env.NEXT_PUBLIC_TESTS != 'true' &&
                                <input type="hidden" name="ik_cur" value={process.env.NEXT_PUBLIC_CURRENCY} />
                            }
                            
                            <input type="hidden" name="ik_payment_currency" value={process.env.NEXT_PUBLIC_TESTS == 'true' ? "XTS" : process.env.NEXT_PUBLIC_CURRENCY } />
                            {
                                process.env.NEXT_PUBLIC_TESTS == 'true' &&
                                <input type="hidden" name="ik_payment_method" value="test" />
                            }
                            <Controller
                                name="ik_customer_email"
                                control={control}
                                render={({ field, formState }) =>
                                    <TextField id="outlined-basic"
                                        label="Email"
                                        variant="outlined"
                                        {...field}
                                        error={!!formState.errors?.ik_customer_email}
                                        helperText={formState.errors?.ik_customer_email?.message} />
                                }
                            />
                            <div className={styles.buttonWrapper}>
                                <Button
                                    onClick={() => {
                                        const result = trigger("ik_customer_email");
                                        result.then((isValid: any) => {
                                            if (document && isValid) {
                                                let form: any = document?.getElementById("payment");
                                                form.submit()
                                            }
                                        })
                                    }}
                                    text='Pay'
                                    icon={<><i className="fa-brands fa-bitcoin"></i></>}
                                    styleType='solid'
                                    classname={styles.buttonhm}
                                />
                            </div>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Modal