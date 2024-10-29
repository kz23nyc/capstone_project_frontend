// import aboutus from "../assets/images/aboutus.jpg";

export default function AboutPage() {
  const aboutus = "https://res.cloudinary.com/dbndth2od/image/upload/v1730173258/aboutus_wzzqlz.jpg";
 
 
  return (
    <main className="max-w-4xl mx-auto mt-10 p-4">

      
      <div>
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 text-justify">
          At Pantrylicious, we believe that great meals start with simple
          ingredients already at your fingertips. In today&apos;s fast-paced
          world, taking time out for grocery shopping can often be a hassle, and
          while takeout might seem like a quick fix, it&apos;s not always
          healthy or cost-effective. That is why we created Pantrylicious — a
          recipe app designed for both the avid cook and the reluctant chef who
          both aspire to craft healthy, delicious meals without the fuss. <br />
          <br />
          Our app simplifies your culinary adventures by focusing on what you
          already have in your pantry or fridge. Whether it&apos;s the lone
          broccoli in your vegetable drawer or the leftover chicken from last
          night&apos;s dinner, Pantrylicious helps you whip up a meal that’s not
          just easy, but also aligned with a minimalist and sustainable
          lifestyle. Imagine creating mouthwatering dishes from a few simple
          ingredients, with the added bonus of keeping your diet fresh, healthy,
          and economical. <br />
          <br />
          For those who love to grow their ingredients, having a small garden
          can enrich your options, but it&apos;s not a necessity. Our app is
          designed to reduce the overwhelming clutter of endless online recipes
          and focus on optimizing what you already possess. Join us at
          Pantrylicious, where every ingredient has potential and every meal is
          a delightful surprise. Dive into our app, input your available
          ingredients, and let us guide you to your next home-cooked
          masterpiece. Happy Cooking!
          <br />
          <br />
        </p>{" "}
      </div>

      <div className="flex flex-col justify-center items-center">
        <img
          src={aboutus}
          alt="Featured Recipe 1"
          className="rounded-lg shadow-lg"
        />
      </div>      
    </main>

    

  );
}
