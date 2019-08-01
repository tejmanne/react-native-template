import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Image, ScrollView, ListView, StyleSheet } from 'react-native';

import { AppHeader, SimpleCard, SimpleCardSection } from '../components';

export class HomeContainer extends Component {
  componentDidMount() {}

  renderMeme = meme => {
    const {
      memeHeaderContainer,
      userIcon,
      usernameLabel,
      followLabelContainer,
      followLabel,
      memePicture,
      memeFooterContainer,
      memeProfileContainer
    } = styles;

    return (
      <SimpleCard key={meme.id}>
        <SimpleCardSection>
          <View style={memeHeaderContainer}>
            <View style={memeProfileContainer}>
              <Image
                style={userIcon}
                source={{ uri: meme.uploader.profilePictureUri }}
              />
              <Text style={usernameLabel}>{meme.uploader.username}</Text>
            </View>
            <View style={followLabelContainer}>
              <Text style={followLabel}>Follow</Text>
            </View>
          </View>
        </SimpleCardSection>
        <SimpleCardSection>
          <Image style={memePicture} source={{ uri: meme.uri }} />
        </SimpleCardSection>
        <SimpleCardSection>
          <View style={memeFooterContainer}>
            <Text>Like</Text>
            <Text>Comment</Text>
            <Text>Share</Text>
          </View>
        </SimpleCardSection>
      </SimpleCard>
    );
  };

  render() {
    const {
      container,
      memesContainer
    } = styles;

    return (
      <View>
        <AppHeader moduleName={'Home'} />
        <ScrollView style={container}>
          <View style={memesContainer}>
            {this.props.arMemes.memesList.map(meme => {
              return this.renderMeme(meme);
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  memesContainer: {},
  memeHeaderContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5
  },
  memeProfileContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  userIcon: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  usernameLabel: {
    lineHeight: 30,
    marginLeft: 5,
    marginRight: 5
  },
  followLabelContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  followLabel: {
    lineHeight: 30,
    color: '#197de1'
  },
  memePicture: {
    flex: 1,
    height: 400,
    resizeMode: 'contain'
  },
  memeFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  }
});

const mapStateToProps = state => {
  return {
    appData: state.appData,
    arMemes: state.arMemes
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
