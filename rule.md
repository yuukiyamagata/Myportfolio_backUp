

ログインユーザのみが記事を作成できる
記事の作成者のみが記事の削除・更新を行える
ログイン・非ログイン問わず、すべてのユーザはすべての記事を閲覧できる

service cloud.firestore {
  match /databases/{database}/documents {
    function isAuthenticated() {
      return request.auth != null;
    }
    function isUserAuthenticated(userId) {
      return request.auth.uid == userId;
    }

    match /users/{userId} {
      allow create, read: if isAuthenticated();
      allow update: if isUserAuthenticated(userId);
    }
  }
}

記事（ posts/ ）は作成者のみが削除・更新でき、誰でも読めるようにしたいため、以下のようになります。


service cloud.firestore {
  match /databases/{database}/documents {
    function isAuthenticated() {
      return request.auth != null;
    }
    function isUserAuthenticated(userId) {
      return request.auth.uid == userId;
    }

    match /users/{userId} {
      allow create, read: if isAuthenticated();
      allow update: if isUserAuthenticated(userId);
      match /posts/{postId} {
        allow read;
        allow create, update, delete: if isUserAuthenticated(userId);
      }
    }
  }
}


例1 : users/{userId} から、単一のユーザデータを取得（単一のドキュメントの内容を取得）

await firebase.firestore()
  .collection('/users')
  .doc(user.uid)
  .get()
  .then(function(doc) {
    if (doc.exists) {
      // do something
      // doc.data() でデータを取得
    } else {
      console.log("No user");
    }
  })
  .catch(function(error) {
    console.log("Error : ", error);
  })


  例2 : users/{userId}/posts/ から、ユーザに紐づくすべての記事データを取得

  await firebase.firestore()
  .doc(`users/${user.uid}`)
  .collection('posts')
  .get()
  .then(function(querySnapshot) {
    commit('setPosts', [])
    querySnapshot.forEach(function(doc) {
      // do something
      // doc.data() で各記事データを取得可能
    })
  })
  .catch(function(error) {
    console.log("Error : ", error);
  })