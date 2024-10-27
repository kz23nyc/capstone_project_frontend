export default function HomePage() {  
  return (
    <div>
      <div>
        <header>
          <div>
            <img src="./images/logo.png"          
              alt="PantryLicious Logo"
            />
            <h1>Pantrylicious</h1>
            <h2>Whip up Magic with What You Have</h2>
          </div>

          <div>
            <button>Log In</button>
            <button>Sign Up</button>
          </div>
        </header>
        
        <div>
            <input type="text" placeholder="Find a recipe or ingredient"/>
        </div>
      </div>
      <nav>
        <a href="">Dinner</a>
        <a href="">Quick & Easy</a>
        <a href="">Breakfast</a>
        <a href="">Salad</a>
        <a href="">About us</a>
        <a href="">Newsletter</a>
      </nav>

      <main>
      <div>
        <img src="" alt= "Pantrylicious main recipe"/>
        <p></p>        
        </div>

        <section>
            <div>
            <img src="" alt= "feature recipe_1"/>
            <p></p>        
            </div>

            <div>
            <img src="" alt= "feature recipe_1"/>
            <p></p>        
            </div>
        </section>
      </main>

      <footer>Copyright 2024 PantryLicious all rights reserved</footer>
    </div>
  );
}
