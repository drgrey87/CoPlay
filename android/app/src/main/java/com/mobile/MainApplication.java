package com.mobile;

import android.app.Application;
import android.util.Log;
import android.support.annotation.NonNull;

import com.oblador.vectoricons.VectorIconsPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.burnweb.rnsimplealertdialog.RNSimpleAlertDialogPackage;
import com.reactnativenavigation.NavigationApplication;
import com.facebook.FacebookSdk;
import com.facebook.CallbackManager;
import com.facebook.appevents.AppEventsLogger;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

    private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

    protected static CallbackManager getCallbackManager() {
      return mCallbackManager;
    }

    @Override
    public boolean isDebug() {
      return BuildConfig.DEBUG;
    }

    @NonNull
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
      return Arrays.<ReactPackage>asList(
        new VectorIconsPackage(),
        new ReactNativeConfigPackage(),
        new MapsPackage(),
        new RNSimpleAlertDialogPackage(),
        new FBSDKPackage(mCallbackManager)
      );
    }

    @Override
    public void onCreate() {
      super.onCreate();
      SoLoader.init(this, /* native exopackage */ false);
    }
}
