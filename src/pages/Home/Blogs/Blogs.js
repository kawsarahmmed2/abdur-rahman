import React from "react";

const Blogs = () => {
  return (
    <div className="container mt-5">
      <h2>Question-1 : Difference between authorization and authentication?</h2>
      <p>
        {" "}
        <span>Ans: </span>
        So, what is the difference between authentication and authorization?
        Simply put, authentication is the process of verifying who someone is,
        whereas authorization is the process of verifying what specific
        applications, files, and data a user has access to. The situation is
        like that of an airline that needs to determine which people can come on
        board. The first step is to confirm the identity of a passenger to make
        sure they are who they say they are. Once a passenger’s identity has
        been determined, the second step is verifying any special services the
        passenger has access to, whether it’s flying first-class or visiting the
        VIP lounge. In the digital world, authentication and authorization
        accomplish these same goals. Authentication is used to verify that users
        really are who they represent themselves to be. Once this has been
        confirmed, authorization is then used to grant the user permission to
        access different levels of information and perform specific functions,
        depending on the rules established for different types of
        users.Authentication factors determine the various elements the system
        use to verify one’s identity prior to granting him access to anything
        from accessing a file to requesting a bank transaction. A user’s
        identity can be determined by what he knows, what he has, or what he is.
        When it comes to security, at least two or all the three authentication
        factors must be verified in order to grant someone access to the system.
        Authorization, on the other hand, occurs after your identity is
        successfully authenticated by the system, which ultimately gives you
        full permission to access the resources such as information, files,
        databases, funds, locations, almost anything. In simple terms,
        authorization determines your ability to access the system and up to
        what extent. Once your identity is verified by the system after
        successful authentication, you are then authorized to access the
        resources of the system. Simply put, authentication is the process of
        verifying who someone is, whereas authorization is the process of
        verifying what specific applications, files, and data a user has access
        to. The situation is like that of an airline that needs to determine
        which people can come on board.
      </p>
      <h2>
        Question-1 : Why are you using firebase? What other options do you have
        to implement authentication?
      </h2>
      <p>
        <span>Ans: </span>
        Founded in 2011 as a chat API and acquired by Google in 2014, Google
        Firebase is a platform that now offers active backend as a service
        (BaaS) for building dynamic web and mobile apps. Firebase concept is
        simple. When you build a client-side app with JavaScript or any of its
        frameworks, for instance, Google Firebase can turn this into a
        serverless app in no time. It also removes the need to manage databases
        yourself, as it does that for you. Therefore, implementing Firebase
        means plugging a ready-made backend into your client code to make it
        dynamic. Ultimately, it eliminates the need to write backend code from
        scratch and gives you a fully functional one instead. Security-wise, it
        also has explicitly built-in security rules that make it a trusted data
        and server handler. Plus, you get a protected backend when you use these
        rules. Firebase by Google can be used for the following: Firebase
        manages all data real-time in the database. So, the exchange of data to
        and fro from the database is easy and quick. Hence, if you are looking
        to develop mobile apps such as live streaming, chat messaging, etc., you
        can use Firebase User authentication is a security process that covers
        all of the human-to-computer interactions that require the user to
        register and log in. Said more simply, authentication asks each user,
        “who are you?” and verifies their response. When a user registers for an
        account, they must create a unique ID and key that will allow them to
        access their account later on. Generally, a username and password are
        used as the ID and key, but the credentials can include other forms of
        keys as well (see our section on types of user authentication).
        Essentially, the user authentication process is what provides users
        repeat access to their own accounts while attempting to block any
        unauthenticated users from gaining access. This means that User A can
        log in to their own account, while User B would be denied access.
        Conversely, User B could access their own account, while User A would be
        unable to. In order to gain access, users must prove to the website that
        they are who they say they are. The ID and key are enough to confirm the
        user’s identity, which will allow the system to authorize the user. It’s
        important to note that authorization, on the other hand, is what
        dictates what users are able to see and do when they log in. While
        authorization and authentication are often used interchangeably, the two
        different terms work together to create a secure login process. To put
        it simply, user authentication has three tasks: Manage the connection
        between the human (user) and the website’s server (computer). Verify
        users’ identities. Approve (or decline) the authentication so the system
        can move to authorizing the user. The process is fairly simple; users
        input their credentials on the website’s login form. That information is
        then sent to the authentication server where the information is compared
        with all the user credentials on file. When a match is found, the system
        will authenticate users and grant them access to their accounts. If a
        match isn’t found, users will be prompted to re-enter their credentials
        and try again. After several unsuccessful attempts, the account may be
        flagged for suspicious activity or require alternative authentication
        methods such as a password reset or a one time password.
      </p>
      <h2>
        Question-1 : What other services does firebase provide other than
        authentication?
      </h2>
      <p>
        <span>Ans: </span>
        It seems like there’s an app for everything these days. Well, almost
        everything. I haven’t found an app that helps me remove impacted earwax.
        It happens to me sometimes, and it’s super obnoxious. But someone could
        build it! I’ll contribute to your Kickstarter. If you’re the
        enterprising sort of person that tackles humanity’s urgent needs with a
        mobile app, you’ll want to know about Firebase. Firebase is Google’s
        mobile application development platform that helps you build, improve,
        and grow your app.It’s a Realtime Database Real-time data is the way of
        the future. Nothing compares to it. Most databases require you to make
        HTTP calls to get and sync your data. Most databases give you data only
        when you ask for it. When you connect your app to Firebase, you’re not
        connecting through normal HTTP. You’re connecting through a WebSocket.
        WebSockets are much, much faster than HTTP. You don’t have to make
        individual WebSocket calls, because one socket connection is plenty. All
        of your data syncs automagically through that single WebSocket as fast
        as your client’s network can carry it. Firebase sends you new data as
        soon as it’s updated. When your client saves a change to the data, all
        connected clients receive the updated data almost instantly. It’s File
        Storage Firebase Storage provides a simple way to save binary files —
        most often images, but it could be anything — to Google Cloud Storage
        directly from the client!!! Firebase Storage has it’s own system of
        security rules to protect your GCloud bucket from the masses, while
        granting detailed write privileges to your authenticated clients. It’s
        Authentication Firebase auth has a built in email/password
        authentication system. It also supports OAuth2 for Google, Facebook,
        Twitter and GitHub. We’ll focus on email/password authentication for the
        most part. Firebase’s OAuth2 system is well-documented and mostly
        copy/paste. If you’ve ever written an authentication system, let’s
        commiserate for a moment. Custom authentication is terrible. I will
        never write an auth system again for as long as I live. I fell in love
        with Firebase Auth at first sight, and the flame has never wavered.
        Sometimes I get frustrated. Sometimes we fight. But I never forget the
        cold, dark abyss of a custom auth system. I count my blessings. Oh, and
        Firebase Auth integrates directly into Firebase Database, so you can use
        it to control access to your data. I’m writing this as if it’s an
        afterthought. It’s not. It’s the second reason that you will love
        Firebase Auth.
      </p>
    </div>
  );
};

export default Blogs;
