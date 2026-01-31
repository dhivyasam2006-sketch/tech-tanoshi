import 'package:flutter/material.dart';
import 'result_page.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage>
    with SingleTickerProviderStateMixin {
  final _searchController = TextEditingController();
  List<String> _history = [];

  late AnimationController _animationController;
  late Animation<double> _fadeAnimation;

  @override
  void initState() {
    super.initState();

    _animationController =
        AnimationController(vsync: this, duration: Duration(seconds: 2));
    _fadeAnimation =
        CurvedAnimation(parent: _animationController, curve: Curves.easeIn);
    _animationController.forward();
  }

  void search() {
    String query = _searchController.text.trim().toLowerCase();
    if (query.isEmpty) return;

    // Add to history
    if (!_history.contains(query)) _history.add(query);

    if (query == "cement" || query == "cosmetic") {
      Navigator.push(
        context,
        MaterialPageRoute(builder: (_) => ResultPage(product: query)),
      );
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text("No eco data found for '$query'")),
      );
    }
    _searchController.clear();
  }

  Widget suggestionCard(String title, String message) {
    return FadeTransition(
      opacity: _fadeAnimation,
      child: Card(
        elevation: 5,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
        margin: EdgeInsets.symmetric(vertical: 8),
        color: Colors.green[50],
        child: Padding(
          padding: EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(title,
                  style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Colors.green[900])),
              SizedBox(height: 8),
              Text(
                message,
                style: TextStyle(fontSize: 14, color: Colors.green[800]),
              ),
            ],
          ),
        ),
      ),
    );
  }

  @override
  void dispose() {
    _animationController.dispose();
    _searchController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Eco Search"),
        backgroundColor: Colors.green[900],
      ),
      body: Padding(
        padding: EdgeInsets.all(20),
        child: SingleChildScrollView(
          child: Column(
            children: [
              // Search Bar
              TextField(
                controller: _searchController,
                decoration: InputDecoration(
                  hintText: "Search product (e.g., cement, cosmetic)",
                  border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12)),
                  prefixIcon: Icon(Icons.search),
                  suffixIcon: IconButton(
                    icon: Icon(Icons.send),
                    onPressed: search,
                  ),
                ),
                onSubmitted: (_) => search(),
              ),
              SizedBox(height: 20),
              // Search History
              if (_history.isNotEmpty)
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text("Search History:",
                        style: TextStyle(
                            fontSize: 16, fontWeight: FontWeight.bold)),
                    SizedBox(height: 10),
                    ..._history.map((e) => ListTile(
                          title: Text(e),
                          leading: Icon(Icons.history, color: Colors.green),
                          onTap: () {
                            _searchController.text = e;
                            search();
                          },
                        ))
                  ],
                ),
              SizedBox(height: 20),
              // Eco Tips / Messages
              suggestionCard("Reduce Carbon Footprint",
                  "Choose products with low carbon certification to reduce pollution."),
              suggestionCard("Eco-Friendly Shopping",
                  "Buying eco-friendly cement and cosmetic products supports clean air and sustainable industry."),
              suggestionCard("Customer Tips",
                  "Check product labels for carbon certification and sustainable manufacturing processes."),
            ],
          ),
        ),
      ),
    );
  }
}
