import React, { useRef } from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  const ref = useRef();

  return (
    <>
      <div className={classes.home}>
        <section className={classes.header}>
          <div className={classes["header__box"]}>
            <h1
              className={`${classes["header__sup-title"]} ${classes["u-margin-bottom-large"]}`}
            >
              Welcome to Store
            </h1>
            <Link
              to="/products"
              className={`${classes["header__go"]} ${classes["btn"]} ${classes["btn--white"]} ${classes["u-margin-bottom-large"]} ${classes["animated-left"]}`}
            >
              Go for shopping
            </Link>
            <a
              href="#about"
              onClick={e=>{
                e.preventDefault();
                ref.current.scrollIntoView({behavior:'smooth'})
              }}
              className={`${classes["header__about"]} ${classes["btn"]} ${classes["animated-bottom"]}`}
            >
              About us
            </a>
          </div>
        </section>
        <section className={classes.about} ref={ref} id="about">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
            inventore doloremque a, porro explicabo natus maiores. Reprehenderit
            molestias rem aliquam perferendis numquam asperiores nam molestiae
            neque repudiandae, eum quam earum cum id itaque? Porro inventore
            dolores fugit sapiente quod? Voluptate nam fugit necessitatibus
            veritatis. Consequuntur quod itaque, beatae quia eveniet totam qui
            minima modi! Tempore, veritatis nesciunt? Natus nam possimus ea
            voluptas voluptatibus tempore mollitia earum quae in, vero error
            quasi id inventore unde fugiat, suscipit dolore, consequuntur sequi
            minima nihil. Repudiandae at quod doloremque eligendi, sed ducimus
            similique, totam sunt numquam magni recusandae odio enim, culpa
            porro perspiciatis! Quos, amet nulla atque ex incidunt enim ipsum
            voluptates perspiciatis? Perferendis odit facere, possimus amet ea
            accusantium non earum provident necessitatibus illum adipisci
            corporis nostrum rerum consequuntur, velit vero autem rem
            consequatur! Dolore quae, fugit accusantium illum et consequuntur
            rerum porro molestiae, quo reprehenderit fugiat! Corrupti maxime
            debitis placeat? Consequuntur amet ex deserunt quasi adipisci nobis
            perspiciatis laudantium quae vero quisquam, aut eveniet dicta, eum,
            nisi recusandae vel cum rerum? Non necessitatibus laborum dolor
            voluptate laboriosam! Repudiandae odio dolore sed inventore dolorum
            ipsa placeat temporibus error eum nisi aliquid et, voluptatum iste
            impedit! Praesentium officiis ab eum magnam eveniet veritatis
            eligendi.
          </p>
        </section>
        <section className={classes.seasonal}>
          <h3>Seasonal mood board</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            eligendi similique eveniet molestiae aliquam, fugit est, iste
            delectus distinctio perspiciatis reiciendis incidunt rerum debitis
            fuga nesciunt recusandae aspernatur corrupti deserunt! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Praesentium consequatur
            aliquid facere tempore voluptas accusantium illum ab corrupti velit,
            ipsa in aspernatur voluptates vel non eos omnis veritatis quasi
            minus? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fugiat impedit, tenetur quibusdam unde omnis earum veritatis non
            velit qui illum, rerum neque, animi nulla voluptates molestiae
            explicabo ut quas adipisci.
          </p>
          <div className={classes.images}>
            <img
              src="https://i.pinimg.com/564x/3b/32/54/3b32541e3a4e6af253ae05723bf97181.jpg"
              alt="home_header"
            />
            <img
              src="https://i.pinimg.com/564x/15/33/c2/1533c2c897f563fab8cb58bea246b4b4.jpg"
              alt="home_header"
            />
            <img
              src="https://i.pinimg.com/564x/b4/3f/79/b43f7914621bbabb773a2498e9dd3946.jpg"
              alt="home_header"
            />
            <img
              src="https://i.pinimg.com/564x/f6/7b/e5/f67be5825cedf15995f2f534b94b9778.jpg"
              alt="home_header"
            />
          </div>
        </section>
      </div>
      <footer className={classes.footer}>
        <p>
          Built by{" "}
          <a href="#" class="footer__link">
            Ali Zare
          </a>
          . Copyright &copy; by Ali Zare.
        </p>
        <p className="email">amin.xare@outlook.com</p>
        <div className={classes['footer__social']}>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-telegram"></i>
        </div>
      </footer>
    </>
  );
};

export default Home;
