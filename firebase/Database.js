import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/database';

class Database {
    static setUserMobile(userId, mobile) {

        let userMobilePath = "/user/123/" + userId + "/details";

        return firebase.database().ref('user').child("123").child(userId).child('details').set({
            mobile: mobile,
            userId:userId
        })

    }

    static listenUserMobile(userId, callback) {

        let userMobilePath = "/user/123/" + userId + "/details";

        firebase.database().ref(userMobilePath).on('value', (snapshot) => {

            var mobile = "";

            if (snapshot.val()) {
                mobile = snapshot.val().mobile
            }

            callback(mobile)
        });
    }

}

module.exports = Database;