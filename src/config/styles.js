import Global from './Global';

const styles = {
  inputBox: {
    borderWidth: 1,
    width: Global.ASPECT_WIDTH * 200,
    margin: 10
  },

  blueInputBox: {
    borderColor: Global.BLUE,
  },

  redInputBox: {
    borderColor: Global.RED,
  },

  orangeInputBox: {
    borderColor: Global.ORANGE,
  },

  yellowInputBox: {
    borderColor: Global.YELLOW,
  },

  limeInputBox: {
    borderColor: Global.LIME,
  },

  inputTextFont: {
    margin: 8,
    fontSize: 15,
    fontFamily: Global.CHALKDUSTER,
    letterSpacing: 1.5,
    lineHeight: 20,
  },

  buttonContainer: {
    backgroundColor: Global.BLUE,
    padding: 8,
    width: Global.ASPECT_WIDTH * 200,
    margin: 10,
    borderRadius: 5,
  },

  buttonText: {
    fontSize: 18,
    fontFamily: Global.CHALKDUSTER,
    letterSpacing: 1.5,
    lineHeight: 23,
    color: Global.WHITE,
    textAlign: 'center',
  },

  headerStyle: {
    width: Global.SCREEN_WIDTH,
    height: Global.ASPECT_HEIGHT * 50,
    backgroundColor: Global.YELLOW,
    alignItems: 'center',
    justifyContent: 'center'
  },

  topHeaderStyle: {
    width: Global.SCREEN_WIDTH,
    height: Global.ASPECT_HEIGHT * 32,
    backgroundColor: Global.YELLOW,
    alignItems: 'center',
    justifyContent: 'center'
  },

  headerTextStyle: {
    fontSize: 20,
    fontFamily: Global.CHALKDUSTER,
    lineHeight: 25,
    letterSpacing: 2,
    color: Global.BLUE,
    textAlign: 'center'
  }
};

export default styles;