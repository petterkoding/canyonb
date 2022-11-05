export default function VariableHeading({ title, as, styles }) {
  const Heading = as;

  return <Heading className={styles}> {title}</Heading>;
}

VariableHeading.displayName = "VariableHeading";
