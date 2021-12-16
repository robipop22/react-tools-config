# Setup Prettier

## Make sure prettier is installed in your IDE

Screenshots are from VSCode, but it should work the same for other IDEs.

![Prettier Extensions](prettier-1.png 'Prettier Extension')

## Code Formatter is setup as Prettier

Open your IDE preferences (for vs code it's in the menu File > Preferences or CTRL/CMD + ,), go to the "Code Formatter" section and select "Prettier" as the formatter.

![Code Formatter](prettier-2.png 'Code Formatter')

## Also make sure format on save is enabled

Search for "Format on Save" and enable it in the IDE's preferences.

![Format on Save](prettier-3.png 'Format on Save')

## Configure Prettier so that it points to the correct config file

In the preferences, go to "Prettier" and under "prettier.config" update the input to "WorkbookComponent/node_modules/@sw-performance/prettier-config/index.json" as shown below.

![Prettier Config](prettier-4.png 'Prettier Config')

Now you can use Prettier to format your code.

As a final check look in the bottom right to see if prettier has 2 ticks like in the picture below. This ensures prettier is setup and runs correctly.

![Prettier Check](prettier-5.png 'Prettier Check')

Note: Try reloading your IDE if it didn't work right after you updated the config.
