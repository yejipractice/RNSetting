import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

// props 
// 버튼 글씨 내용 title, 자식 text 있을 경우, 자식 text가 title보다 우선시 
// 버튼 글씨 스타일 textStyle
// 버튼 배경 스타일 backStyle,
// 버튼 클릭 이벤트 onPress
const CustomButton = props => {
    return(
        <TouchableOpacity style={props.backStyle} onPress={props.onPress}>
            <Text style={props.textStyle}>{props.children||props.title}</Text>
        </TouchableOpacity>
    );
};

CustomButton.defaultProps = {
    title: "Button",
    textStyle: {fontSize : 24},
    backStyle : {padding: 20},
};

CustomButton.propTypes = {
    title: PropTypes.string,
    textStyle: PropTypes.object,
    backStyle: PropTypes.object,
    onPress: PropTypes.func.isRequired,
};

export default CustomButton; 

// n초 동안 클릭하고 있을 경우에 이벤트를 호출하고 싶다면,
// onLongPress와 delayLongPress={n} 추가.