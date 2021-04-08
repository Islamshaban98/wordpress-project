<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'admin123' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '*ph=2~|kqW$]?vA[L{FsdCx)f+>);+mJ?/lt=O#[pWy=MJ;6]YK9|o<)n`3(H^76' );
define( 'SECURE_AUTH_KEY',  '~cI(07/Z+S-M`WN@;K uzu,xD)S!bBv/vzq:virQLO_4u~nmy&Ztw>*d}|/$X(#8' );
define( 'LOGGED_IN_KEY',    '53X =39@Z$y?F: edmx@glg<]~m&_h:L`YbV=6lab-:*sV%!3GE[Y04=/1c,,gt[' );
define( 'NONCE_KEY',        'jL%HIB~G-HTUpp 9JA!4!9V!_CFF)Zzgv7G3{yzW~~HHS*cBFd &`ns[;N0hAmUm' );
define( 'AUTH_SALT',        'Cv%|ILO!8;X_Wvb<YoT8oHX!;U5>)I-yZM3NA$G[I; sjT^`xJ{f3o,HVY1qHBe1' );
define( 'SECURE_AUTH_SALT', 'jd>s!Ga}hR,x{don9FT;;N[p6r,m$(Su2Z;4OL1 Q`bI(8^Ar S]=sv`)7 `[6!F' );
define( 'LOGGED_IN_SALT',   'LM;%+/1 n)fi.B)<!jwo+PD?soG^[{>g9;B&cTgYW=NBu`MMp,+3G:ZkB_Tw5)a!' );
define( 'NONCE_SALT',       ']QN5jq}9x&w}W=LI^X0XUWmlUPe3@7A(H3%i).eq-ym.Ou{],K7ciSWMdB;,2qDk' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
