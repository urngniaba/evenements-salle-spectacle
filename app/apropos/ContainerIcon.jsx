import styles from '@/app/apropos/ContainerIcon.module.css';

export default function ContainerIcon({slogant}) {
    return (
        <div className={styles.feature}>
          <p className={styles.featureText}>
            {slogant}
          </p>
        </div>
    );
}