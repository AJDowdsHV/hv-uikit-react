# Releases

We want to make sure our release schedule is clear to everyone. We are aware of the needs of external teams to not be blocked by our releases, for instance, a bug fix or a component being available on our lab (incubation) section. 

The following points explain our strategies to make sure this is possible. 

## Release numbers
We follow the [Semantic Versioning Guidelines](https://semver.org/). This release breaks the version numbers in MAJOR.MINOR.PATCH, increment the:
 - MAJOR version when you make incompatible API changes
 - MINOR version when you add functionality in a backwards compatible manner
 - PATCH version when you make backwards compatible bug fixes
 - Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.  

## Schedule
We operate in a two week sprint schedule, and our goal is to do a release each sprint with the work developed. Although, we will do a build every day, publishing what is on our repo. 
The release number will be automatically calculated, based on the commits pushed that day. In case nothing is changed, no release will happen. 

We know releasing something every sprint, mainly when working on a major, might not be possible. But even for those, we commit to release an preview build (alpha, beta or rc) for those who want to try it. 

Every release changelogs will be available in the [github releases section](https://github.com/pentaho/hv-uikit-react/releases) and our [documentation](https://pentaho.github.io/hv-uikit-react/) updated.

Majors are going to be released in a 12 month window at max, and may include breaking changes. We wil always announce it 2 or 3 months ahead, so teams consuming uikit can properly plan. 

Along with this information, we will always provide preview builds whenever we feel we have a good subset of things for teams to try out. And as always, feedback is very very welcome.    