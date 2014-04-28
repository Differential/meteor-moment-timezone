// This file undoes all the trickery that we needed to get timezone working.
(function(undefined) {

  if (this.__AC_OLD_REQUIRE) {
    this.require = this.__AC_OLD_REQUIRE;
    delete this.__AC_OLD_REQUIRE;
  } else {
    this.require = undefined;
  }

  if (this.__AC_OLD_MODULE) {
    this.module = this.__AC_OLD_MODULE;
    delete this.__AC_OLD_MODULE;
  } else {
    this.module = undefined;
  }
}).call(this);
