# javaGradleStartPack

## Description

This is a java gradle project starter pack for outputting multiple .EXE executables on demand.
working with it is as easy as,

importing it inside your IDE with gradle support.
(tested in intelij 2013+)
writing a main file,
and following the rules inside build.gradle file.

## Why
I made this repository to help me, and others avoid the need to study the difficult and cumbersome API/documentation of gradle which  
took me many hours, and frustration to get it right.
and the result is quite pleasing.
I am trying to save you the time it takes to study and create your own gradle configuration files.
any java programmer should be able to easily get started with this example in less than 10 minutes.



## Usage
navigate to the project root path and then:   
### Build project(this will generate a build directory):
```
gradle build
```
### Create executables(this will generate an out directory, must be performed after the build command mentioned above):
```
gradle createExe
```
### Can combine both of the commands above:
```
gradle build createExe
```

##Important notes
Please note that this project is tested and working with:
Gradle 3.1

so instead of relying on your system gradle, or even having to install gradle at all,
You should use the packed in gradle version, in order to do that:
on windows:
```
gradlew.bat ...command
```
for example:
```
gradlew.bat build
```
or on unix/linux:
```
gradlew ...command
```
for example:
```
gradlew build
```
This will make sure your project compiles regardless of gradle version,operating system or environment.


upon success you should have a build and an out directory with the executables ready to go.

best of luck, and enjoy!
