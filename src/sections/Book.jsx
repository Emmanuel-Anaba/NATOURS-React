import { useFormik } from "formik";
import * as yup from "yup";

const Book = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email("Please enter a valid email").required(),
    group: yup.string().required("Please select an option"),
  });

  const onSubmit = async (values, { resetForm }) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    resetForm();
  };

  const {
    errors,
    values,
    touched,
    isSubmitting,
    getFieldProps,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      group: "",
    },
    validationSchema: formSchema,
    onSubmit,
  });
  return (
    <section id="book" className="py-20 bg-gradient">
      <div className="myContainer lg:w-10/12 grid md:grid-cols-2 rounded-lg bg-center bg-cover overflow-hidden shadow-2xl bg-blend-screen">
        <form
          action="#"
          className="p-8 md:p-12 grid gap-10"
          onSubmit={handleSubmit}>
          <p className="section-heading text-left">START BOOKING NOW</p>
          <div>
            <input
              className={errors.name && touched.name && "input-error"}
              placeholder="Full Name"
              id="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <p className="error">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              className={errors.email && touched.email && "input-error"}
              placeholder="Email Address"
              id="email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>
          <div>
            <div className="mb-4">
              <input
                type="radio"
                {...getFieldProps("group")}
                name="group"
                value="Small Group"
              />
              <label>Small Tour Group</label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                {...getFieldProps("group")}
                name="group"
                value="Large Group"
              />
              <label>Large Tour Group</label>
            </div>
            {errors.group && touched.group && (
              <p className="error">{errors.group}</p>
            )}
          </div>

          <button
            className="btn bg-[#55c57a] text-white mr-auto disabled:bg-[#c8efcf] disabled:text-[#8db88a]"
            type="submit"
            disabled={isSubmitting}>
            NEXT STEP &rarr;
          </button>
        </form>
      </div>
    </section>
  );
};

export default Book;
