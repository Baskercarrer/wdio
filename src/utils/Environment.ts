import fs from 'fs/promises';

export interface UiConfig {
  baseUrl: string;
  timeout: number;
  browser?: string;
  headless?: boolean;
}

export interface ApiConfig {
  baseUrl: string;
  defaultHeaders: Record<string, string>;
}

interface EnvironmentDetails {
  uiConfig: UiConfig;
  apiConfig: ApiConfig;
}

class Environment {
  private dev: EnvironmentDetails = {
    uiConfig: {
      baseUrl: 'https://magento.softwaretestingboard.com/',
      timeout: 30000,
      browser: 'chrome',
      headless: false,
    },
    apiConfig: {
      baseUrl: 'https://reqres.in/api/',
      defaultHeaders: { Accept: 'application/json' },
    },
  };
  get getApiConfig(): ApiConfig {
    return this.getEnv.apiConfig;
  }

  get getEnv(): EnvironmentDetails {
    return process.env['env']?.toLowerCase() === 'dev' ? this.dev : this.dev;
  }

  public getUiConfig(browser?: string, headless?: boolean): UiConfig {
    this.getEnv.uiConfig.browser = browser;
    this.getEnv.uiConfig.headless = headless;
    return this.getEnv.uiConfig;
  }

  async convertVideoToBase64(filePath: string) {
    return await fs.readFile(filePath, { encoding: 'base64' });
  }
}
export default new Environment();
