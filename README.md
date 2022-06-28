# tabletracker
Arduino project for checking if the table tennis table is available at UiT

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The project is a hobby-project designed to make it easier to know whether the table-tennis table is available or not at UiT - Realfagsbygget. 

The solution consists of three main components. 

<ol>
  <li> Arduino with WiFi and motion sensor </li>
  <li> ASP.NET CORE Web API </li>
  <li> Webpage written in Angular </li> 
</ol> 

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [Node.js](https://nodejs.org/en/)
* [Angular](https://angular.io/)
* [ASP.NET CORE Web API](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-6.0&tabs=visual-studio)
* [Arduino MKR WiFi 1010](https://docs.arduino.cc/hardware/mkr-wifi-1010)
* [Movement sensor for Arduino](https://www.kjell.com/no/produkter/elektro-og-verktoy/arduino/arduino-tilbehor/bevegelsesdetektor-for-arduino-p87060)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
* Visual Studio
* Arduino IDE
* (Docker)

### Installation - Without Docker

1. Clone the repo
   ```sh
   git clone https://github.com/sigubrat/tabletracker.git
   ```
2. Navigate to the web-page folder and install NPM packages
   ```sh
   cd tabletracker-web
   npm install
   ```
3. Open the Web API (folder: TableTrackerAPI) in Visual Studio and build

4. Connect your Arduino to your computer

5. Update WiFi-settings to your preference and network (secrets.h) 

### Installation - With Docker 

If this works, and you have docker installed: 

1. Go to root-folder of the repository and compose Docker files:

2. If you want to change any ports used, edit Dockerfile in /tabletracker-web and /TableTrackerAPI

```sh
   docker-compose up -d 
```
3. Set up the Arduino in the Arduino IDE

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

WIP 🚧

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] ASP.NET CORE API
- [x] Web page to display status
- [ ] Arduino software
    - [x] Main workflow
    - [ ] Sensor
    - [ ] Testing

See the [open issues](https://github.com/sigubrat/tabletracker/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Sigurd - Discord: Djaff#0001 - sbr091@uit.no

Project Link: [https://github.com/sigubrat/tabletracker](https://github.com/sigubrat/tabletracker)

<p align="right">(<a href="#top">back to top</a>)</p>
