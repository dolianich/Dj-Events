import { FaExclamationTriangle } from 'react-icons/fa'
import styles from './404.module.css';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className={styles.error}>
        <h1><FaExclamationTriangle/> 404</h1>
         <h4>Sorry, there is nothing here</h4>
         <Link href='/'>Go Back Home</Link>
    </div>
  )
}

export default NotFoundPage