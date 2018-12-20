/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Web3 from 'web3';
import Web3Webview from 'react-native-web3-webview';

const html = `
<html>
    <head>
        <title>Verify with Wyre</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    </head>
    <body style="margin-top:200px;">
        <div class="container">
            <button id="verify-button" class="btn btn-primary mt-5">Verify with Wyre</button>
        </div>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        <script src="https://verify.sendwyre.com/js/verify-module-init.js"></script>
        <script type="text/javascript">
            (function($) {
                var handler = new Wyre({
                        apiKey: "AK-CNLUZJLQ-B4MC4TTZ-3ZGHNT4N-UUGRE9EF",
                        env: "test",
                        onExit: function (error) {
                            if (error != null)
                                console.error(error)
                            else
                                console.log("exited!")
                        },
                        onSuccess: function () {
                            console.log("success!")
                        }
                    });
                $('#verify-button').on('click', function(e) {
                    handler.open();
                });
            })(jQuery);
        </script>
    </body>
</html>
`;


type Props = {};
export default class App extends Component<Props> {

  componentWillMount() {
    // instantiate web3 and connect to localhost provider
    this.web3  = new Web3('ws://localhost:8545');
    this.web3.eth.getBlock('latest').then(console.log).catch(console.log);
    this.web3.eth.getAccounts(function(error,res) {
      if(!error) {
        console.log(res);
      } else {
        console.log(error);
      }
    });
  }

  render() {
    return (

			<Web3Webview
				onProgress={this.onLoadProgress}
				onMessage={this.onMessage}
				onNavigationStateChange={this.onPageChange}
				ref={this.webview}
				html={ html }
			/>
		);
  }
}

const styles = StyleSheet.create({
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
