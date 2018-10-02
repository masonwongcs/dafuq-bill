import * as React from 'react'
import { Animated, Modal, View, Picker, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'

interface AnimatedWrapperProps {
  style: StyleProp<ViewStyle>
}
interface AnimatedWrapperState {
  bottomAnim: Animated.Value
}
class AnimatedWrapper extends React.Component<AnimatedWrapperProps, AnimatedWrapperState> {
  readonly state = {
    bottomAnim: new Animated.Value(-300) // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(this.state.bottomAnim, {
      toValue: 0,
      duration: 100
    }).start() // Starts the animation
  }
  render() {
    const { bottomAnim } = this.state
    const { style, children } = this.props
    return <Animated.View style={Object.assign({}, style, { bottom: bottomAnim })}>{children}</Animated.View>
  }
}

interface OptionProps {
  value: string | number
  label: string
}
const Option: React.SFC<OptionProps> = ({ value, label }) => {
  return <Picker.Item value={value} label={label} />
}

interface SelectProps {
  value: string | number
  onChange: (itemValue: string | number, itemPosition: number) => void
}
interface SelectState {
  showPicker: boolean
}

class Select extends React.Component<SelectProps, SelectState> {
  static Option = Option
  readonly state = {
    showPicker: false
  }
  onTouch = () => {
    this.setState({
      showPicker: true
    })
  }
  closePicker = () => {
    this.setState({
      showPicker: false
    })
  }
  render() {
    const { showPicker } = this.state
    const { value, onChange, children } = this.props
    const options = React.Children.map<OptionProps>(children, (child: React.ReactElement<OptionProps>) => child.props)
    return (
      <>
        <TouchableOpacity onPress={this.onTouch}>
          <Text>{options.find(option => option.value === value).label}</Text>
        </TouchableOpacity>

        <Modal visible={showPicker} transparent>
          <View style={{ height: '100%' }}>
            <TouchableOpacity
              onPress={this.closePicker}
              style={{ backgroundColor: '#000', opacity: 0.3, height: '100%', width: '100%' }}
            />
            <AnimatedWrapper
              style={{
                backgroundColor: '#fff',
                width: '100%',
                position: 'absolute',
                left: 0
              }}>
              <Picker selectedValue={value} onValueChange={onChange}>
                {children}
              </Picker>
            </AnimatedWrapper>
          </View>
        </Modal>
      </>
    )
  }
}

export default Select
