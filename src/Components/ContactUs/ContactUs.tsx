import './ContactUs.css'

function ContactUs() {
    const onSubmit = async (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "cbeeb2fc-7a4b-479a-86bb-6f2d03608bd9");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            alert("Thank you for your message! We will get back to you soon.");
        }
    };
    return (
        <section className='contact'>
            <form onSubmit={onSubmit}>
                <h2>Contact Us!</h2>
                <h4>We would love to hear ideas, suggestions, and feedback!</h4>
                <div className='input-box'>
                    <label>Full Name</label>
                    <input type="text" className='field' placeholder='Enter your name' name='name'required />
                </div>
                <div className='input-box'>
                    <label>Email Address</label>
                    <input type="email" className='field' placeholder='Enter your email' name='email' required />
                </div>
                <div className='input-box'>
                    <label>Your Message</label>
                    <textarea name="message" className='field mess' placeholder='Enter your message' required></textarea>
                </div>
                <button type="submit" className='form-button'>Submit</button>
            </form>
        </section>
    )
}

export default ContactUs