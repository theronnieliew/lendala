
# Lendala Test

## Step 1: Install Dependencies

Run the following command to install dependencies:

```bash
yarn install
cd ios && pod install
```


## Step 2: Start the Metro Server

Run the following command from the root of the project:

```bash
yarn start
```

## Step 3: Start the Application

Open a _new_ terminal from the _root_ of the project. Run the following command to start the _iOS_ app:

```bash
yarn run ios --simulator="iPhone 14 Pro"
```

You can replace the selected simulator with any iPhone of your choice provided you have it installed. Eg: iPhone 11, iPhone 13 Pro.

## Step 4: Run a Unit Test

I've created a simple unit test for the HomeScreen.

To run tests for the HomeScreen component, execute the following command:

```bash
yarn test src/__tests__/HomeScreen.test.tsx
```


