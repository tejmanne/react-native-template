const INITIAL_STATE = {
  title: 'Welcome...',
  memesList: [
    {
      id: 9001,
      uri: 'https://pics.me.me/only-men-will-understand-this-eizad-everyday-re-a-29441676.png',
      uploader: {
        id: 1001,
        username: 'teja.manne',
        displayName: 'Teja Manne',
        profilePictureUri: 'https://i.stack.imgur.com/zsV0B.jpg?s=328&g=1'
      }
    },
    {
      id: 9002,
      uri: 'https://www.saturdaydownsouth.com/wp-content/uploads/2015/11/Saban-Two-Things-MEME.jpg',
      uploader: {
        id: 1001,
        username: 'teja.manne',
        displayName: 'Teja Manne',
        profilePictureUri: 'https://i.stack.imgur.com/zsV0B.jpg?s=328&g=1'
      }
    },
    {
      id: 9003,
      uri: 'https://statics.sportskeeda.com/wp-content/uploads/2016/09/10-1473691619-800.jpg',
      uploader: {
        id: 1001,
        username: 'teja.manne',
        displayName: 'Teja Manne',
        profilePictureUri: 'https://i.stack.imgur.com/zsV0B.jpg?s=328&g=1'
      }
    }
  ]
};

export const AR_MEMES = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '':
      break;

    default:
      break;
  }
  return state;
};
