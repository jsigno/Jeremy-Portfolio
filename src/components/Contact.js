import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0c4a6e] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action=""
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-3">
          <p className="text-6xl font-bold inline border-b-4 border-green-600 text-white">
            Contact
          </p>
          <p className="text-white py-4">
            To schedule a complimentary property inspection, you have two
            options: you can either fill out the form below or send an email to
            Cornejo@mrconstructionservices.com. Additionally, you can call me at
            (940)-230-1867 to schedule your inspection over the phone. Please
            provide me with your contact information, as well as any relevant
            details about your property that you would like us to know. I
            appreciate your interest in our services and look forward to hearing
            from you soon.
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-green-600 hover:border-green-600 px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
}
