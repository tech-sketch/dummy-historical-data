Dummy Historical Data Operator
======================

This operator generates a dummy historical data for highcharts-widget

Build
-----

Be sure to have installed [Node.js](http://node.js) in your system. For example, you can install it on Ubuntu and Debian running the following commands:

```bash
sudo apt update; sudo apt install curl gnupg
curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
sudo apt install nodejs npm
```

Install npm dependencies by running:

```bash
npm install
```

For build the widget you need download grunt:

And now, you can use grunt:

```bash
./node_modules/.bin/grunt
```

If everything goes well, you will find a wgt file in the `dist` folder.

## Documentation

Documentation about how to use this widget is available on the
[User Guide](src/doc/userguide.md). Anyway, you can find general information
about how to use widgets on the
[WireCloud's User Guide](https://wirecloud.readthedocs.io/en/stable/user_guide/)
available on Read the Docs.

## Reference

- [FIWARE Mashup](https://mashup.lab.fiware.org/)

## License

[Apache License 2.0](/LICENSE)

## Copyright

Copyright (c) 2019 TIS Inc.
