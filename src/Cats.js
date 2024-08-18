const Cats = () => {
    return (
      <div className="cats">
        <h1>Our Cats</h1>
        <div className="cat-images">
          <img src="/images/cat-1.png" alt="Cat 1" className="cat-image" />
          <img src="/images/cat-2.png" alt="Cat 2" className="cat-image" />
          <img src="/images/cat-3.png" alt="Cat 3" className="cat-image" />
          <img src="/images/cat-4.png" alt="Cat 4" className="cat-image" />
        </div>
        <p>
            Meet our wonderful cats, each with a unique story to tell. From playful kittens to wise old souls, our feline friends come from various backgrounds and experiences. 
            Some have been rescued from difficult situations, while others were abandoned and found a second chance with us. 
            Every cat you see here is looking for a loving home where they can thrive and share their affection. 
            By adopting or sponsoring one of our cats, you are giving them the opportunity to live a happy and fulfilling life. 
            Your support helps us provide the necessary care, medical attention, and love that each of these cats deserves. 
            Join us in making a difference in their lives today!
        </p>
      </div>
    );
  };
  
  export default Cats;