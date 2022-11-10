#CHANGE LOG AFUEGO BLOG HUB

## [Unreleased]

## [0.2.0] - 2022-10-26

### Added

- Nav bar and navigation routing functionality
- Created new unique modules to host certain functions
- Setup database and preliminary test data
- Blog post comments implemented

### Changed

- Comments throughout code
- Main page
- font temporarily not loaded properly
- Click on post functionality no longer gives an alert. Now takes user to the full post section where one will eventually be able to see the full post and its comments. As of right now only the comments have been properly implemented.

### Removed

- crowded main page

## [0.3.0] - 2022-11-9

### Added

- github access and repository made
- Login and register account functionality
- authentication page
- authentication error page
- a protected route component that is called when reaching any other path
- protected route chekcs if user is authenticated and redirects to appropriate path user was trying to go to

### Changed

- Comments throughout code
- font loading issue fixed
- updated version of react router dom and migrated to new version(6.4.2)
    - modified all uses of useHistory to reflect useNavigate

### Removed

- nonfunctional code from previous attempts.
