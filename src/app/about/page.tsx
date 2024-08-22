export default function AboutPage() {
  return (
    <div className=" bg-gradient-to-r from-blue-50  to-white mx-auto p-4">
      <div className="max-w-6xl m-auto px-2 md:px-8 flex md:flex-row flex-col items-center justify-between">
        <div className="mb-10">
          <div className="my-6">
            <h1 className="text-2xl font-bold my-4">Company Overview</h1>
            <p className="text-sm font-light md:w-3/4 w-full border-b   montserrat-font border-gray-300 pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              adipisci deleniti vitae ullam. Natus enim nobis aliquid iste
              officiis doloribus obcaecati sapiente soluta laborum perspiciatis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              expedita est? Odio odit minus reiciendis inventore unde, earum
              assumenda iste placeat sunt, dignissimos accusantium. Itaque?
            </p>
          </div>
          <div className="my-6 ">
            <h1 className="text-2xl font-bold my-4">Vision</h1>
            <p className="text-sm font-light md:w-3/4 w-full border-b   montserrat-font border-gray-300 pb-4">
              Our vision is to become the leading support hub for budding
              entrepreneurs across India, we catalyze innovative ideas into
              successful enterprises through expert guidance, resources, and
              training.
            </p>
          </div>
          <div className="my-6">
            <h1 className="text-2xl font-bold my-4">Mission</h1>
            <p className="text-sm font-light montserrat-font md:w-3/4   w-full">
              At PBS, our mission is clear: empower, support, and grow. We offer
              personalized training, expert consulting, and dedicated support
              services to help businesses navigate challenges and scale new
              heights ensuring sustainable success
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Person giving thumbs up"
            className=" w-[100rem] h-auto shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
