import styles from '../styles/Home.module.css'
import { MainLayout } from '../layouts/layout'
import Image from 'next/image'

export default function Home() {
  return (
    <MainLayout>
      <div className='container'>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="logo"
            width={700}
            height={200}
            priority='true'
          />
        </div>

        <div className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Assumenda nemo velit facere odio. Debitis sequi officiis ipsa dolore commodi, 
          atque quam aliquid maxime consectetur voluptate accusantium eum est. Est?
        </div>
      </div>
    </MainLayout>
    
  )
}
