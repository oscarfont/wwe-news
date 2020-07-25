import React, { Component } from 'react';
import { Share, View } from 'react-native';
// Correct
import { Icon } from 'react-native-elements';

class ShareButton extends Component {
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          this.props.url,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <View style={this.props.style}>
        <Icon onPress={this.onShare} name='share' color='white'/>
      </View>
    );
  }
}

export default ShareButton;