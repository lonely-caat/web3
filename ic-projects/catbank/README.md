# Cat bank! 
  A bank for all your cat needs! Written in motoko and plain js to help you top up and withdraw your balance as well as count compound interest which will    pertain throughout time without the need of a persistant storage db. how neat!
<img width="361" alt="Screenshot 2022-12-30 at 3 57 32 PM" src="https://user-images.githubusercontent.com/33058683/210085523-70225e23-0a7b-4fcf-97e3-19116830052f.png">


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
