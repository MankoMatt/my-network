import {Formik, Form, Field} from "formik";
import {logpog} from "./Redux/HeaderReduser";
import {useContext} from "react";
import MyContext from "./Redux/Contex";
import {Navigate} from "react-router-dom";


const LoginPiece = (props) => {

    const vlol = (value) => {
        if (!value) {
            return "ГОНДОН.";
        } else if (!/^[a-zA-Z0-9]+.[a-zA-Z0-9]+@[a-z]+.[a-z]{2,4}$/.test(value)) {
            return "Что за херь ты написал?";
        }
    };

    const lkol = {
        err: false
    }

    // if(props.state.auth.err === true) {
    //   debugger
    //   this.setState({
    //     err: true
    //   })
    // }


    const yio = (value) => {
        if (!value) {
            return "Вопрос что ли не ясен!??";
        }
        if (!/^[a-zA-Z0-9]{1,10}$/.test(value)) {
            return "Что это(<_<?)";
        }
    };

    let rora = (data) => {
        props.logpog(data.login, data.pass, data.check)

    };

    return (
        <Formik
            initialValues={{
                login: "",
                pass: "",
                check: false,
            }}
            onSubmit={rora}
        >
            {({errors, touched}) => {
                return (
                    <Form>
                        <Field
                            name="login"
                            placeholder="Какое у тебя погоняло?"
                            validate={vlol}
                        />
                        <br></br>
                        {errors.login && touched.login && <div>{errors.login}</div>}
                        <Field name="pass" placeholder="Пароль или жизнь?" validate={yio}/>
                        <br></br>
                        {errors.pass && touched.pass && <div>{errors.pass}</div>}
                        <Field type={"checkbox"} name="check"/> Я запоинил твоё лицо(?)
                        <br></br>
                        <br></br>
                        <br></br>
                        <button type="submit">Пройди, если сможешь...</button>

                        {props.state.auth.err ? <div>Incorrect Email or Password</div> : <div>jjjjjjj</div>}
                    </Form>
                );
            }}
        </Formik>
    );
};

const LoginReduxForm = (props) => {
    const context = useContext(MyContext);

    let logpogd = (login, pass, check) => {
        context.store.dispatch(logpog(login, pass, check));

    };

    return <LoginPiece state={props.state} logpog={logpogd}/>;
};

const Login = (props) => {
    const context = useContext(MyContext);

    const state = context.store.getState()

    if (state.auth.isAuth === true) {
        return <Navigate to="/Profile"/>;
    }

    return (
        <>
            <h1>
                Без Логина не пущу! ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ(.)(.)
                <br/>ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ
                ㅤ'-____-'
            </h1>
            <LoginReduxForm state={state}/>

        </>
    );
};

export default Login;
