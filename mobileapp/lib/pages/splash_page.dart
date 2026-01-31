import 'package:flutter/material.dart';
import 'dart:async';
import 'login_page.dart';
import 'dart:math';

class SplashPage extends StatefulWidget {
  @override
  _SplashPageState createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage> with TickerProviderStateMixin {
  late AnimationController _fadeController;
  late Animation<double> _fadeAnimation;

  late AnimationController _circleController;

  @override
  void initState() {
    super.initState();

    // Fade-in text
    _fadeController =
        AnimationController(vsync: this, duration: Duration(seconds: 2));
    _fadeAnimation =
        CurvedAnimation(parent: _fadeController, curve: Curves.easeIn);
    _fadeController.forward();

    // Circle animation
    _circleController =
        AnimationController(vsync: this, duration: Duration(seconds: 2))
          ..repeat(reverse: true);

    // Move to Login page after 3 seconds
    Timer(Duration(seconds: 3), () {
      Navigator.pushReplacement(
          context, MaterialPageRoute(builder: (_) => LoginPage()));
    });
  }

  @override
  void dispose() {
    _fadeController.dispose();
    _circleController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: AnimatedBuilder(
        animation: _circleController,
        builder: (context, child) {
          return Container(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [Colors.green[400]!, Colors.green[900]!],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
            ),
            child: Stack(
              children: [
                // Animated circles
                Positioned(
                  top: 100 + 50 * sin(_circleController.value * 2 * pi),
                  left: 50,
                  child: CircleAvatar(
                    radius: 20 + 10 * _circleController.value,
                    backgroundColor: Colors.green[200],
                  ),
                ),
                Positioned(
                  top: 200 + 30 * cos(_circleController.value * 2 * pi),
                  right: 70,
                  child: CircleAvatar(
                    radius: 15 + 10 * _circleController.value,
                    backgroundColor: Colors.green[100],
                  ),
                ),
                Positioned(
                  bottom: 150 + 40 * sin(_circleController.value * 2 * pi),
                  left: 100,
                  child: CircleAvatar(
                    radius: 25 + 5 * _circleController.value,
                    backgroundColor: Colors.green[300],
                  ),
                ),

                // Center Text
                Center(
                  child: FadeTransition(
                    opacity: _fadeAnimation,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          "Eco Awareness App",
                          style: TextStyle(
                              fontSize: 28,
                              fontWeight: FontWeight.bold,
                              color: Colors.white),
                        ),
                        SizedBox(height: 10),
                        Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 40),
                          child: Text(
                            "Government Initiative for Air Pollution & Carbon Emission",
                            textAlign: TextAlign.center,
                            style:
                                TextStyle(fontSize: 16, color: Colors.white70),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
