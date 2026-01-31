import 'package:flutter/material.dart';
import 'dart:math';

class ResultPage extends StatefulWidget {
  final String product;

  ResultPage({required this.product});

  @override
  _ResultPageState createState() => _ResultPageState();
}

class _ResultPageState extends State<ResultPage>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  List<Offset> _stars = [];
  final Random _random = Random();

  late String _company;

  @override
  void initState() {
    super.initState();

    // Assign company based on product
    if (widget.product.toLowerCase() == "cement") {
      _company = "GreenBuild Cement Ltd.";
    } else if (widget.product.toLowerCase() == "cosmetic") {
      _company = "EcoGlow Cosmetics";
    } else {
      _company = "Unknown Company";
    }

    // Animation controller for stars
    _controller =
        AnimationController(vsync: this, duration: Duration(seconds: 3))
          ..repeat();

    // Generate random stars positions
    for (int i = 0; i < 50; i++) {
      _stars.add(Offset(_random.nextDouble(), _random.nextDouble()));
    }

    _controller.addListener(() {
      setState(() {
        _stars = _stars
            .map((p) => Offset((p.dx + 0.002) % 1.0, (p.dy + 0.0015) % 1.0))
            .toList();
      });
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  Widget buildStar(Offset p, double size) {
    return Positioned(
      left: p.dx * MediaQuery.of(context).size.width,
      top: p.dy * MediaQuery.of(context).size.height,
      child: Icon(
        Icons.star,
        color: Colors.yellow[700],
        size: size,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    String title = "Certificate of Eco-Friendliness";
    String message =
        "Congratulations! You chose an eco-friendly product from $_company.\n\nYour choice contributes to reducing carbon emissions and supporting a cleaner, sustainable planet! 🌱💚";

    return Scaffold(
      backgroundColor: Colors.green[50],
      appBar: AppBar(
        title: Text("Eco Certificate"),
        backgroundColor: Colors.green[900],
      ),
      body: Stack(
        children: [
          // Floating stars for celebration
          ..._stars.map((p) => buildStar(p, 6 + _random.nextDouble() * 4)),

          Center(
            child: Container(
              margin: EdgeInsets.all(20),
              padding: EdgeInsets.all(30),
              decoration: BoxDecoration(
                color: Colors.white,
                border: Border.all(color: Colors.green[900]!, width: 4),
                borderRadius: BorderRadius.circular(20),
                boxShadow: [
                  BoxShadow(
                    color: Colors.green.withOpacity(0.3),
                    blurRadius: 15,
                    offset: Offset(0, 8),
                  ),
                ],
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  // Certificate Title
                  Text(
                    title,
                    style: TextStyle(
                      fontSize: 28,
                      fontWeight: FontWeight.bold,
                      color: Colors.green[900],
                      letterSpacing: 1.5,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  SizedBox(height: 15),
                  Divider(color: Colors.green[300], thickness: 2),
                  SizedBox(height: 20),

                  // Product Info
                  Text(
                    "Product: ${widget.product.toUpperCase()}",
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: Colors.green[800],
                    ),
                  ),
                  SizedBox(height: 8),
                  Text(
                    "Company: $_company",
                    style: TextStyle(
                      fontSize: 18,
                      color: Colors.green[700],
                    ),
                  ),
                  SizedBox(height: 20),

                  // Motivational message
                  Text(
                    message,
                    style: TextStyle(
                      fontSize: 16,
                      color: Colors.green[800],
                      height: 1.5,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  SizedBox(height: 30),

                  // Eco Certification Badge
                  Container(
                    padding: EdgeInsets.symmetric(vertical: 10, horizontal: 30),
                    decoration: BoxDecoration(
                      color: Colors.green[200],
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Text(
                      "🌿 Eco Certification Verified ✅",
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: Colors.green[900],
                      ),
                    ),
                  ),

                  SizedBox(height: 20),

                  // Encouragement text
                  Text(
                    "🎉 Keep making eco-friendly choices! 🎉",
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Colors.green[900],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
