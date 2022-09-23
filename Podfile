platform :ios, '11.0'


target 'JYYinYongBao' do

  pod 'MLeaksFinder'
    post_install do |installer|
      ## Fix for XCode 12.5
      find_and_replace("../node_modules/react-native/React/CxxBridge/RCTCxxBridge.mm",
        "_initializeModules:(NSArray<id<RCTBridgeModule>> *)modules", "_initializeModules:(NSArray<Class> *)modules")
      find_and_replace("../node_modules/react-native/ReactCommon/turbomodule/core/platform/ios/RCTTurboModuleManager.mm",
         "RCTBridgeModuleNameForClass(module))", "RCTBridgeModuleNameForClass(Class(module)))")
  end

  def find_and_replace(dir, findstr, replacestr)
  Dir[dir].each do |name|
      text = File.read(name)
      replace = text.gsub(findstr,replacestr)
      if text != replace
          puts "Fix: " + name
          File.open(name, "w") { |file| file.puts replace }
          STDOUT.flush
      end
  end
  Dir[dir + '*/'].each(&method(:find_and_replace))
end

end

