import Link from 'next/link';

import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}></div>
        <div>
          <div className={classes.hero}>
            <h1>Daddy Mikes Kitchenette for the Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Daddy Mikes Kitchenette is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            Daddy Mikes Kitchenette is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Daddy Mikes Kitchenette?</h2>
          <p>
            Daddy Mikes Kitchenette is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            Daddy Mikes Kitchenette is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}