import { Text, View } from 'react-native';
import { styles } from './DetailItem.styles';

interface DetailItemProps {
  label: string;
  value: string;
  subValue?: string;
}

export default function DetailItem({
  label,
  value,
  subValue,
}: DetailItemProps) {
  return (
    <View style={styles.detailItem}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
      {subValue && <Text style={styles.detailSubValue}>{subValue}</Text>}
    </View>
  );
}
