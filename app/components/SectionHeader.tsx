import styles from "../styles";

interface SectionHeaderProps {
  title: string;
  sub: string;
}

const SectionHeader = ({ title, sub }: SectionHeaderProps) => (
  <div style={styles.sectionHeader}>
    <h2 style={styles.sectionH2}>{title}</h2>
    <p style={styles.sectionSub}>{sub}</p>
  </div>
);

export default SectionHeader;