# Cat notes! 

This is a solution to [Udemy React challenge](https://www.udemy.com/course/the-complete-web-development-bootcamp/) hooked up onto ICP with motoko backend for persistent notes instead of using a external storage DB. And it's a 100% not a blatant theft of Google Notes. 


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
