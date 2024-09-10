import { useForm } from "../../hooks/useForm";

import GeneralBanner from "../banners/GeneralBanner";

const initialValues = {

};

const onSubmit = (values) => {
    //todo: I have to validate the inputs and do error handling

    try {
        console.log(values);
    } catch (error) {
        console.log(error.message);
    }
};

export default function Contacts() {
    const { values, changeHandler, submitHandler } = useForm(initialValues, onSubmit);

    return (
        <>
            <GeneralBanner title="Contact Us" />

            <div className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div id="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90186.37207676383!2d-80.13495239500924!3d25.9317678710111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1877e4a82d%3A0xa891714787d1fb5e!2sPier%20Park!5e1!3m2!1sen!2sth!4v1637512439384!5m2!1sen!2sth"
                                    width="100%" height="400px" frameBorder="0" style={{ border: "0" }} allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h2>Say Hello. Don't Be Shy!</h2>
                                <span>Details to details is what makes <b>Neat Fashion</b> different from the other brands.</span>
                            </div>
                            <form id="contact" onSubmit={submitHandler}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <input
                                            name="name"
                                            type="text"
                                            id="name"
                                            placeholder="Your name" 
                                            required=""
                                            value={values.name}
                                            onChange={changeHandler}
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <input
                                            name="email"
                                            type="text"
                                            id="email"
                                            placeholder="Your email" 
                                            required=""
                                            value={values.email}
                                            onChange={changeHandler}
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <textarea
                                            name="message"
                                            rows="6"
                                            id="message"
                                            placeholder="Your message"
                                            required=""
                                            value={values.message}
                                            onChange={changeHandler}
                                            ></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="main-dark-button"><i
                                                className="fa fa-paper-plane"></i></button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};