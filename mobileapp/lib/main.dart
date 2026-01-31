import 'package:flutter/material.dart';
import 'pages/splash_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Eco Awareness App',
      theme: ThemeData(primarySwatch: Colors.green),
      home: SplashPage(),
    );
  }
}
