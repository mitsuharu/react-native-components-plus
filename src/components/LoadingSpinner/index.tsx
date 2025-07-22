import {
  ActivityIndicator,
  StyleSheet,
  View,
  type ViewStyle,
} from 'react-native'
import { styleType } from '../utils/styles'

type Props = {
  isLoading: boolean
}
type ComponentProps = Props & {}

const Component: React.FC<ComponentProps> = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  )
}

const Container: React.FC<Props> = (props) => {
  const { isLoading } = props
  return isLoading ? <Component {...props} /> : null
}

export { Container as LoadingSpinner }

const styles = StyleSheet.create({
  container: styleType<ViewStyle>({
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  }),
})
