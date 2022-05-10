import React from "react";
import "./ContactStyle.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="countainer">
        <div className="content">
          <form>
            <h1>
              {" "}
              <span> Contact </span> us
            </h1>
            <div>
              <label for="userName">Name</label>
              <input type="text" placeholder="Name" />
            </div>

            <div>
              <label for="email">Email</label>
              <input type="text" placeholder="Email" />
            </div>

            <div>
              <label for="email">Message</label>
              <textarea  placeholder="Message" cols={20} rows={10} />
            </div>

            <div>
                <button className='button' type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
