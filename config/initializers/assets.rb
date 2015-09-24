# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
Rails.application.config.assets.precompile += %w( game3.js )
Rails.application.config.assets.precompile += %w( js/classlist_polyfill.js )
Rails.application.config.assets.precompile += %w( js/animframe_polyfill.js )
Rails.application.config.assets.precompile += %w( js/keyboard_input_manager.js )
Rails.application.config.assets.precompile += %w( js/html_actuator.js )
Rails.application.config.assets.precompile += %w( js/grid.js )
Rails.application.config.assets.precompile += %w( js/tile.js )
Rails.application.config.assets.precompile += %w( js/local_storage_manager.js )
Rails.application.config.assets.precompile += %w( js/game_manager.js )
Rails.application.config.assets.precompile += %w( js/application.js )
Rails.application.config.assets.precompile += %w( js1/bind_polyfill.js )
Rails.application.config.assets.precompile += %w( js1/classlist_polyfill.js )
Rails.application.config.assets.precompile += %w( js1/animframe_polyfill.js )
Rails.application.config.assets.precompile += %w( js1/keyboard_input_manager.js )
Rails.application.config.assets.precompile += %w( js1/tile.js )
Rails.application.config.assets.precompile += %w( js1/local_storage_manager.js )
Rails.application.config.assets.precompile += %w( js1/html_actuator.js )
Rails.application.config.assets.precompile += %w( js1/game_manager.js )