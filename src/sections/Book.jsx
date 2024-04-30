const Book = () => {
  const formFields = [
    {
      label: "Full Name",
      type: "text",
    },
    {
      label: "Email Address",
      type: "email",
    },
  ];

  const radio = ["Small Tour Group", "Large Tour Group"];

  return (
    <section id="book" className="py-20">
      <div className="myContainer lg:w-10/12 grid md:grid-cols-2 rounded-lg bg-center bg-cover overflow-hidden shadow-2xl bg-blend-screen">
        <form action="#" className="p-8 md:p-12 grid gap-12">
          <p className="section-heading text-left">START BOOKING NOW</p>
          {formFields.map(({ label, type }) => (
            <div key={label}>
              <input
                key={label}
                placeholder={label}
                name={label.replaceAll(" ", "")}
                id={label.replaceAll(" ", "")}
                className="form-element focus:shadow-lg"
                type={type}
                required
              />
              <label className="ml-2 text-xs">{label}</label>
            </div>
          ))}
          {radio.map((item) => (
            <div key={item} className="flex gap-4">
              <input
                type="radio"
                id={item.replaceAll(" ", "")}
                name="group"
                required
              />
              <label>{item}</label>
            </div>
          ))}
          <button className="btn bg-[#55c57a] text-white mr-auto" type="submit">
            NEXT STEP &rarr;
          </button>
        </form>
      </div>
    </section>
  );
};

export default Book;
