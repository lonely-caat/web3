# Cat notes! 

This is a solution to [Udemy React challenge](https://www.udemy.com/course/the-complete-web-development-bootcamp/) hooked up onto ICP with motoko backend to use as a persistent storage for notes. And it's a 100% not a blatant theft of Google Notes. 

<img width="1514" alt="Screenshot 2023-01-04 at 10 07 15 AM" src="https://user-images.githubusercontent.com/33058683/210523672-496830cc-423c-4ccb-8552-281844f2f890.png">



to run: 
```bash

- dfx start (in separate tab)
- npm install
- dfx deploy
- npm start
( to get to CandidUI dfx canister id __Candid_UI - and go to http://127.0.0.1:8000/?canisterId=$that canister id)
```



## Running the project locally

To run the project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:8000?canisterId={asset_canister_id}`.

Additionally, if you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 8000
