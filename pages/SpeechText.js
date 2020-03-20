import React, { Component } from 'react';
import {
  PermissionsAndroid, Platform,
  Picker, StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import Voice from '@react-native-community/voice'; 

class SpeechText extends Component {
  state = {
    languageCode: 'hi',
    permissionAccepted: false,
    translatedText: '',
    recognized: '',
    pitch: '',
    error: '',
    end: '',
    started: '',
    results: [],
    partialResults: [],
    languages: [
      {name: 'Afrikaans', code: 'af' },
      {name: 'Irish', code: 'ga' },
      {name: 'Albanian', code: 'sq' },
      {name: 'Italian', code: 'it' },
      {name: 'Arabic', code: 'ar' },
      {name: 'Japanese', code: 'ja' },
      {name: 'Azerbaijani', code: 'az' },
      {name: 'Kannada', code: 'kn' },
      {name: 'Basque', code: 'eu' },
      {name: 'Korean', code: 'ko' },
      {name: 'Bengali', code: 'bn' },
      {name: 'Latin', code: 'la' },
      {name: 'Belarusian', code: 'be' },
      {name: 'Latvian', code: 'lv' },
      {name: 'Bulgarian', code: 'bg' },
      {name: 'Lithuanian', code: 'lt' },
      {name: 'Catalan', code: 'ca' },
      {name: 'Macedonian', code: 'mk' },
      {name: 'Chinese Simplified', code: 'zh-CN' },
      {name: 'Malay', code: 'ms' },
      {name: 'Chinese Traditional', code: 'zh-TW' },
      {name: 'Maltese', code: 'mt' },
      {name: 'Croatian', code: 'hr' },
      {name: 'Norwegian', code: 'no' },
      {name: 'Czech', code: 'cs' },
      {name: 'Persian', code: 'fa' },
      {name: 'Danish', code: 'da' },
      {name: 'Polish', code: 'pl' },
      {name: 'Dutch', code: 'nl' },
      {name: 'Portuguese', code: 'pt' },
      {name: 'English', code: 'en'},
      {name: 'Romanian', code: 'ro'},
      {name: 'Esperanto', code: 'eo'},
      {name: 'Russian', code: 'ru'},
      {name: 'Estonian', code: 'et'},
      {name: 'Serbian', code: 'sr'},
      {name: 'Filipino', code: 'tl'},
      {name: 'Slovak', code: 'sk'},
      {name: 'Finnish', code: 'fi'},
      {name: 'Slovenian', code: 'sl'},
      {name: 'French', code: 'fr'},
      {name: 'Spanish', code: 'es'},
      {name: 'Galician', code: 'gl'},
      {name: 'Swahili', code: 'sw'},
      {name: 'Georgian', code: 'ka'},
      {name: 'Swedish', code: 'sv'},
      {name: 'German', code: 'de'},
      {name: 'Tamil', code: 'ta'},
      {name: 'Greek', code: 'el'},
      {name: 'Telugu', code: 'te'},
      {name: 'Gujarati', code: 'gu'},
      {name: 'Thai', code: 'th'},
      {name: 'Haitian Creole', code: 'ht'},
      {name: 'Turkish', code: 'tr'},
      {name: 'Hebrew', code: 'iw'},
      {name: 'Ukrainian', code: 'uk'},
      {name: 'Hindi', code: 'hi' },
      {name: 'Urdu', code: 'ur' },
      {name: 'Hungarian', code: 'hu' },
      {name: 'Vietnamese', code: 'vi' },
      {name: 'Icelandic', code: 'is' },
      {name: 'Welsh', code: 'cy' },
      {name: 'Indonesian', code: 'id' },
      {name: 'Yiddish', code: 'yi' }
    ],
  };

  constructor(props) {
    super(props);
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechRecognized = this.onSpeechRecognized;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
    Voice.onSpeechPartialResults = this.onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
  }

  componentDidMount() {
    this.checkRunTimePermission();
  }

  async checkRunTimePermission() {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({ permissionAccepted: true });
      } else {
        this.setState({ permissionAccepted: false });
      }
    }
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart = (e) => {
    console.log('onSpeechStart: ', e);
    this.setState({
      started: '√',
    });
  };

  onSpeechRecognized = (e) => {
    console.log('onSpeechRecognized: ', e);
    this.setState({
      recognized: '√',
    });
  };

  onSpeechEnd = (e) => {
    console.log('onSpeechEnd: ', e);
    this.setState({
      end: '√',
    });
  };

  onSpeechError = (e) => {
    console.log('onSpeechError: ', e);
    this.setState({
      error: JSON.stringify(e.error),
    });
  };

  onSpeechResults = (e) => {
    console.log('onSpeechResults: ', e);
    this.setState({
      results: e.value,
    });
  };

  onSpeechPartialResults = (e) => {
    console.log('onSpeechPartialResults: ', e);
    this.setState({
      partialResults: e.value
    });
    if(this.state.partialResults==""){
      console.log('Khaali: ',this.state.partialResults);
    }else{
      var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
      + "en" + "&tl=" + this.state.languageCode + "&dt=t&q=" + encodeURI(this.state.partialResults);

    console.log('url: ',url);
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('translateddd:  ',responseJson);
        try{
          trans = responseJson[0][0][0];
          this.setState({
            translatedText: trans
          });
        }catch(error){
          console.error(error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
    
  };

  onSpeechVolumeChanged = (e) => {
    console.log('onSpeechVolumeChanged: ', e);
    this.setState({
      pitch: e.value,
    });
  };

  _startRecognizing = async () => {
    this.setState({
      translatedText: '',
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });

    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  };

  _stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  _cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };

  _destroyRecognizer = async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });
  };

  render() {
    let serviceItems = this.state.languages.map((s, i) => {
      return <Picker.Item key={i} label={s.name} value={s.code} />
    });

    if (!this.state.permissionAccepted) {
      return (<View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native Voice!</Text>
        <Text style={styles.instructions}>
          Permission is required for this module
        </Text>

        <TouchableHighlight onPress={() => this.checkRunTimePermission()}>
          <Text style={styles.action}>Request Permission</Text>
        </TouchableHighlight>

      </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native Voice!</Text>
        <Picker
          style={{ height: 50, width: 170 }}
          selectedValue={this.state.languageCode}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ languageCode: itemValue })
          }>
          {serviceItems}
        </Picker>
        <Text style={styles.instructions}>
          Press the button and start speaking.
        </Text>

        <TouchableHighlight onPress={this._startRecognizing}>
          <Text style={styles.action}>Start</Text>
        </TouchableHighlight>

        <Text style={styles.stat}>{`Started: ${this.state.started}`}</Text>
        <Text style={styles.stat}>{`Recognized: ${
          this.state.recognized
          }`}</Text>
        <Text style={styles.stat}>{`Pitch: ${this.state.pitch}`}</Text>
        <Text style={styles.stat}>{`Error: ${this.state.error}`}</Text>
        <Text style={styles.stat}>Results</Text>
        {this.state.results.map((result, index) => {
          return (
              <Text key={`result-${index}`} style={styles.reslt}>
                {result}
              </Text>
          );
        })}
        <Text style={styles.stat}>Partial Results</Text>
        {this.state.partialResults.map((result, index) => {
          return (
              <Text key={`partial-result-${index}`} style={styles.reslt}>
                {result}
              </Text>
          );
        })}
        <Text style={styles.tran_reslt}>
          {this.state.translatedText}
        </Text>
        <Text style={styles.stat}>{`End: ${this.state.end}`}</Text>
        {/* <TouchableHighlight onPress={this._stopRecognizing}>
          <Text style={styles.action}>Stop Recognizing</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._cancelRecognizing}>
          <Text style={styles.action}>Cancel</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._destroyRecognizer}>
          <Text style={styles.action}>Destroy</Text>
        </TouchableHighlight> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  action: {
    textAlign: 'center',
    color: '#0000FF',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  stat: {
    margin: 8,
    textAlign: 'center',
    color: '#B0171F',
  },
  reslt: {
    margin: 8,
    textAlign: 'center',
    color: '#000000',
  },
  tran_reslt: {
    textAlign: 'center',
    color: '#808080',
  },
});

export default SpeechText;